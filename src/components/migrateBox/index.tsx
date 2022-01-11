import { WalletButton } from '../ui/walletButton';
import styles from './MigrateBox.module.scss';

type PageProps= {
  content: string;
  full?: string;
  title?: string;
};

export const MigrateBox = ({
  content,
  full,
  title,
}: PageProps) => {
  return (
   <div className={styles.migrate}
      style={{
        width: full,
      }}>
      <div className={styles.migrateBox}></div>
      <div className={styles.migrateContent}>
        <p className={styles.content}>{content}</p>
        <div className={styles.subtitle}>{title}</div>
        <WalletButton color='black'/>
      </div>
    </div>
  );
};
