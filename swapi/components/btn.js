const Btn = props => {
	const {loading, onClick, active, kind} = props;
  const classes = `btn ${(kind.toLowerCase()===active ? 'btn-primary' : 'btn-default')}`;
	return (
    <button
      disabled={loading}
      onClick={() => onClick(kind.toLowerCase())}
      className={classes}
    >
      {kind}
    </button>
	);
};

export default Btn;
