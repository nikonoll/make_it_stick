import Header from './header';

const LoadingCircle = () => (
<div>
    <Header></Header>
<div className="wrapper">
    <div className="loader">
        <svg className="loading-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle className="loading-animation__path" cx="50" cy="50" r="20" />
        </svg>
    </div>
    <div className="loading-message">
        <p className="text-gray-700 p-4 text-xl font-bold">Breathe, we are getting you more</p>
    </div>
</div>
<style jsx>{`

*{
    margin: 0;
    padding: 0;
}

html, body{
    height: 100%;
}

.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.loader{
    width: 8rem;
}

.loading-animation__path{
    stroke: black;
    stroke-width: 1;
    fill: none;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: stroke 4s linear infinite;
}

@keyframes stroke {
    from {
        stroke-dashoffset: 500;
    }
    to {
        stroke-dashoffset: 0;
        
    }
}

.loading-message {
    font-size: 20px;
}

`}</style>
</div>
)

export default LoadingCircle