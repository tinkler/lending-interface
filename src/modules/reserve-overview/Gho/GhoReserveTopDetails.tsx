import { Trans } from '@lingui/macro';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { FormattedNumber } from 'src/components/primitives/FormattedNumber';
import { TextWithTooltip } from 'src/components/TextWithTooltip';
import { TopInfoPanelItem } from 'src/components/TopInfoPanel/TopInfoPanelItem';
import { useAppDataContext } from 'src/hooks/app-data-provider/useAppDataProvider';

export const GhoReserveTopDetails = () => {
  const { ghoLoadingData, ghoReserveData } = useAppDataContext();

  const loading = ghoLoadingData;
  const theme = useTheme();
  const downToSM = useMediaQuery(theme.breakpoints.down('sm'));

  const valueTypographyVariant = downToSM ? 'main16' : 'main21';
  const symbolsTypographyVariant = downToSM ? 'secondary16' : 'secondary21';

  return (
    <>
      <TopInfoPanelItem title={<Trans>Total borrowed</Trans>} loading={loading} hideIcon>
        <FormattedNumber
          value={ghoReserveData.aaveFacilitatorBucketLevel}
          symbol="USD"
          variant={valueTypographyVariant}
          symbolsVariant={symbolsTypographyVariant}
          symbolsColor="text.primary"
        />
      </TopInfoPanelItem>

      <TopInfoPanelItem title={<Trans>Available to borrow</Trans>} loading={loading} hideIcon>
        <FormattedNumber
          value={ghoReserveData.aaveFacilitatorRemainingCapacity}
          symbol="USD"
          variant={valueTypographyVariant}
          symbolsVariant={symbolsTypographyVariant}
          symbolsColor="text.primary"
        />
      </TopInfoPanelItem>

      <TopInfoPanelItem
        title={
          <TextWithTooltip text={<Trans>Price</Trans>}>
            <Trans>
              The Pegasys Protocol is programmed to always use the price of 1 HOE = $1. This is
              different from using market pricing via oracles for other crypto assets. This creates
              stabilizing arbitrage opportunities when the price of HOE fluctuates.
            </Trans>
          </TextWithTooltip>
        }
        loading={loading}
        hideIcon
      >
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
          <FormattedNumber
            value={1}
            symbol="USD"
            variant={valueTypographyVariant}
            symbolsVariant={symbolsTypographyVariant}
            symbolsColor="text.primary"
          />
        </Box>
      </TopInfoPanelItem>
    </>
  );
};
