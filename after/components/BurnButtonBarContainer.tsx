import React from 'react'

function BurnButtonBarContainer({burnAmount , onChangeBurnAmount , executeBurn , txProgress ,txButton , burnTxHash ,walletChain , prettyEthAddress , zeroAddress}) {
  return (
    <BurnButtonBar>
    <p className="box_subheader">Burn your App</p>
    <div className="description medium">
      &quot; The process of reducing the supply of App tokens by
      permanently removing a certain number of them from circulation,
      often through a deliberate and recorded mechanism. &quot;
    </div>

    <div className="burn_bar">
      <div className="input_value_box">
        <p className="input_muted">Enter amount to Burn</p>
        <input
          className="input_value"
          type="text"
          value={burnAmount}
          placeholder="0.00"
          onChange={onChangeBurnAmount}
        />
      </div>
      <Button
        variant="outlined"
        onClick={executeBurn}
        startIcon={
          txProgress ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <AppIcon
              url="/icons/fire.svg"
              fill={IconFilter.primary}
              size={1.5}
              margin={0}
            />
          )
        }
      >
        <span>{txButton}</span>
      </Button>
    </div>
    {burnTxHash && (
      <div className="tx_links">
        <AppTooltip
          title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
        >
          <AppExtLink
            url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
            className="header_link"
          >
            Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
          </AppExtLink>
        </AppTooltip>
      </div>
    )}
  </BurnButtonBar>
  )
}

export default BurnButtonBarContainer
