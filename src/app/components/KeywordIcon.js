export default function KeywordIcon({ keyword }) {
    return (
        <span className="px-3 py-1 border border-white text-white text-sm font-light rounded-md hover:bg-white hover:text-black transition duration-300">
            {keyword}
        </span>
    );
}