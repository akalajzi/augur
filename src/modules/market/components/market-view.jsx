import React from 'react';

import MarketActive from 'modules/market/components/market-active';
import MarketReported from 'modules/market/components/market-reported';
import NullStateMessage from 'modules/common/components/null-state-message';

import getValue from 'utils/get-value';

const MarketView = (p) => {
  const nullMessage = 'No Market Data';

  const isAvailable = getValue(p, 'market.id');
  const isOpen = getValue(p, 'market.isOpen');

  return (
    <section id="market_view">
      {!isAvailable && <NullStateMessage message={nullMessage} />}
      {isAvailable && isOpen &&
        <MarketActive
          {...p}
          isReportTabVisible={getValue(p, 'market.isReportTabVisible')}
          isPendingReport={getValue(p, 'market.isPendingReport')}
        />
      }
      {isAvailable && !isOpen && <MarketReported {...p} />}
    </section>
  );
};

export default MarketView;
