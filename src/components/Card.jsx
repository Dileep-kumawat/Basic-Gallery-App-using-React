
const Card = ({ elem }) => {
    return (
        <div className="w-full h-[40vh] md:w-[31%] rounded-xl overflow-hidden hover:*:scale-110">
            <img className="w-full h-full cursor-pointer transition-all duration-300 ease-linear object-cover" src={elem.download_url} alt="image" loading="lazy" />
        </div>
    )
}

export default Card