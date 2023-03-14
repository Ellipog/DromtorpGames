import styles from "../css/LeaderboardData.module.css";

function LeaderboardData(props) {
	const boardInfo = props.data;

	const placementStyles = {
		1: styles.first,
		2: styles.second,
		3: styles.third,
	};

	return (
		<div className={styles.class}>
			<div className={styles.place}>{props.i}</div>
			<div className={`${styles.classInfo} ${placementStyles[props.i]}`}>
				<div className={styles.name}>{boardInfo.klasse}</div>
				<div className={styles.points}>{boardInfo.score}</div>
			</div>
		</div>
	);
}

export default LeaderboardData;
