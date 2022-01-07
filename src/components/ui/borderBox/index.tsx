import styles from './BorderBox.module.scss';

type PageProps = {
  children: any;
  color: string;
  hover?: boolean;
  width?: number;
  full?: boolean;
  active?: boolean;
};

export const BorderBox = ({
  children,
  color,
  active,
  hover,
  width,
  full,
}: PageProps) => (
  <div
    className={active ? styles.active : hover ? styles.main : ''}
    style={{
      padding: width,
      position: 'relative',
      width: full ? '100%' : 'fit-content',
    }}
  >
    <div
      className={styles.border}
      style={{
        width: width ?? 6,
        background: color,
        top: width,
        bottom: width,
        left: 0,
        position: 'absolute',
      }}
    />
    <div
      className={styles.border}
      style={{
        width: width ?? 6,
        background: color,
        top: width,
        bottom: width,
        right: 0,
        position: 'absolute',
      }}
    />
    <div
      className={styles.border}
      style={{
        height: width ?? 6,
        background: color,
        left: width,
        right: width,
        top: 0,
        position: 'absolute',
      }}
    />
    <div
      className={styles.border}
      style={{
        height: width ?? 6,
        background: color,
        left: width,
        right: width,
        bottom: 0,
        position: 'absolute',
      }}
    />
    {children}
  </div>
);
