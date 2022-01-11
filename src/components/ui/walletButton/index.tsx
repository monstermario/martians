import { type } from 'os';
import styles from './WalletButton.module.scss';


type Pageprops = {
  onClick?: any;
  color?: string;
}

export const WalletButton = ({
  onClick,
  color,
}:Pageprops) => (   
  <div className={styles.wallet}>
    <div className={styles.walletConnect}>
      <div className={styles.walletBtn}
        onClick={onClick}
      >
        <p className={styles.walletText}
          style={{
            color:color,
          }}
        >
          Connect Metamask
        </p>
      </div>
    </div>
  </div>
);
