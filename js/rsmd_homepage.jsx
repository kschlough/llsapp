function Homepage() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="container">
                    <h1>LLS Man Woman of the Year: Team Rosemead</h1>
                    <h2>Each year, all across the country, dedicated candidates engage in an exciting competition to earn The Leukemia Lymphoma Society's (LLS) "Man and Woman of the Year" titles.</h2>

                    <a href="https://www.mwoy.org/">Learn more on The Leukemia Lymphoma Society's (LLS) website.</a>

                    <button>Donate</button>
                </div>
            </div>

        </React.Fragment>
    );
};

ReactDOM.render(<Homepage />, document.querySelector('#root'));
