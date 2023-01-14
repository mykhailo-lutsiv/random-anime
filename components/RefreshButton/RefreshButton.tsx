import styles from './RefreshButton.module.scss';

interface RefreshButtonProps {
  onClick: () => void;
}

function RefreshButton({onClick}: RefreshButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>Refresh</button>
  )
}

export default RefreshButton;