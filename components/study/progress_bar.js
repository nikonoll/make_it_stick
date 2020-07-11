const ProgressBar = (props) => {
    // completed must be integer between 0 - 10
    const { completed } = props;
    var filled = [];
    filled.length = 10;
    filled.fill("")
    filled = filled.map((item, index) => {
        return (completed > index) ? "text-green-700" : "text-gray-300"
    });

    return (
        <div className="flex items-center">
                {filled.map((color, index) => (
                    <div key={index}>
                        <svg className="h-4 w-4" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                            <circle className={`fill-current ${color}`} cx="6" cy="6" r="6" />
                        </svg>
                    </div>
                ))}
        </div>
    );
}

export default ProgressBar