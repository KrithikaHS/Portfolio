// Logo component that adapts to theme
export function Logo({ className = "" }) {
    return (
        <svg

            viewBox="0 100 300 300"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* K Letter Design */}
            <path
                d="M177.5 183.5V316.5L225 250L177.5 183.5Z"
                className="fill-foreground transition-colors"
            />
            <path
                d="M225 250L320 183.5H250L225 250Z"
                className="fill-foreground transition-colors"
            />
            <path
                d="M225 250L250 316.5H320L225 250Z"
                className="fill-foreground transition-colors"
            />
        </svg>
    );
}
