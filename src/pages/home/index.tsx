/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 17:37:52
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-05 23:45:09
 * @FilePath: /xm/WebWizard/umi/src/pages/home/index.tsx
 * @Description: 入口
 */
import AboutUs from './components/aboutUs';
import DoubtfulSuggestion from './components/doubtfulSuggestion';
import FlagExplanation from './components/flagExplanation';
import Index from './components/index';
import Resources from './components/resources';
import TechnologyStack from './components/technologyStack';
import styles from './index.less';
export default () => {
  return (
    <div className={styles.homeBody}>
      <Index />
      <TechnologyStack />
      <FlagExplanation />
      <Resources />
      <AboutUs />
      <DoubtfulSuggestion />
    </div>
  );
};