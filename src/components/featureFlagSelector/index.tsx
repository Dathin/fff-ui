import { Button, CircularProgress, Menu, MenuItem } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useMain } from "../../context/mainContext";
import { AccountResponse, useAccounts } from "../../hooks/useAccounts";

export function FeatureFlagSelector(){
    const { currentAccount, setCurrentAccount } = useMain();
    const [anchorEl, setAnchorEl] = useState<HTMLElement>();
    const { data, execute: getAccounts, loading, unexpectedError } = useAccounts();

    useEffect(() => {
        getAccounts();
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(undefined);
    };

    const selectAccount = (account: AccountResponse) => {
        handleClose();
        setCurrentAccount(account);
    }
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {currentAccount ? currentAccount.name : 'Account'}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
            { loading ? 
                    (<MenuItem><CircularProgress size="24px" color="primary"></CircularProgress></MenuItem>)
                    : (data?.map((account) => (<MenuItem onClick={() => selectAccount(account)}>{account.name}</MenuItem>)))}
        </Menu>
      </div>
    );
}