const SectionTitle = ({ title }) => {
    return (
        <h1 className="flex items-center justify-center py-4">
            <span className="hidden md:flex items-center transform translate-y-0.5 relative">
                <span className="inline-block h-0.5 bg-white md:w-32 lg:w-48 absolute right-1" />
                <span className="inline-block w-2 h-2 bg-white transform rotate-45 relative" />
            </span>
            <span className="mx-3 text-white font-500 leading-tight text-4xl md:text-5xl">{title}</span>
            <span className="hidden md:flex items-center transform translate-y-0.5 relative">
                <span className="inline-block h-0.5 bg-white md:w-32 lg:w-48 absolute left-1" />
                <span className="inline-block w-2 h-2 bg-white transform rotate-45 relative" />
            </span>
        </h1>
    );
}

export default SectionTitle;