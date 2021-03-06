import { augur } from '../../../services/augurjs';
import { updateBranch } from '../../branch/actions/update-branch';
import { syncBranch } from '../../branch/actions/sync-branch';
import { reportingCycle } from '../../branch/selectors/reporting-cycle';
import { syncBlockchain } from '../../app/actions/sync-blockchain';
import { listenToUpdates } from '../../app/actions/listen-to-updates';
import { loadTopics } from '../../topics/actions/load-topics';
import { loadFullMarket } from '../../market/actions/load-full-market';
import { clearMarketsData } from '../../markets/actions/update-markets-data';

export const loadBranch = branchID => (dispatch, getState) => {
  dispatch(clearMarketsData());
  augur.loadBranch(branchID, (err, branch) => {
    if (err) return console.log('ERROR loadBranch', err);
    dispatch(updateBranch({
      ...branch,
      ...reportingCycle(branch.periodLength)
    }));
    const { selectedMarketID } = getState();
    if (selectedMarketID !== null) {
      dispatch(loadFullMarket(selectedMarketID));
    }
    dispatch(loadTopics(branchID));
    dispatch(syncBlockchain());
    dispatch(syncBranch((err) => {
      if (err) console.error('syncBranch:', err);
      dispatch(listenToUpdates());
    }));
  });
};
