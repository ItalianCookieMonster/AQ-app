const articles = [
    {
        "title": "10 Tips to Protect Yourself from Unhealthy Air",
        "url": "https://www.lung.org/clean-air/outdoors/10-tips-to-protect-yourself"
    },
    {
        "title": "Ambient (outdoor) air quality and health",
        "url": "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health"
    },
    {
        "title": "How air pollution affects our health",
        "url": "https://www.eea.europa.eu/en/topics/in-depth/air-pollution/eow-it-affects-our-health"
    },
    {
        "title": "Air Pollution and Your Health",
        "url": "https://www.niehs.nih.gov/health/topics/agents/air-pollution"
    },
    {
        "title": "How to Improve Air Quality at Home: 8 Tips to Try",
        "url": "https://www.healthline.com/health/how-to-improve-air-quality-at-home"
    },
    {
        "title": "What you can do about air pollution",
        "url": "https://www.pca.state.mn.us/news-and-stories/what-you-can-do-about-air-pollution"
    },
    {
        "title": "Air Pollution: Everything You Need to Know",
        "url": "https://www.nrdc.org/stories/air-pollution-everything-you-need-know"
    },
    {
        "title": "Improving Indoor Air Quality",
        "url": "https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality"
    },
    {
        "title": "10 things you can do to help reduce air pollution today",
        "url": "https://www.sustrans.org.uk/our-blog/get-active/2020/in-your-community/10-things-you-can-do-to-help-reduce-air-pollution-today"
    },
    {
        "title": "Outdoor Air Quality and Air Pollution: Tips to Protect Yourself",
        "url": "https://www.webmd.com/lung/outdoor-air-quality-and-air-pollution"
    }
];



const MoreInfo = () => {

    function getRandomArticle() {
        const randomIndex = Math.floor(Math.random() * articles.length); // Generate a random index
        return articles[randomIndex]; // Return the article at the random index
    }

    const randomArticle = getRandomArticle();
    return (
        <div className="mt-8">
            <span className="mr-2">Want to know more?</span>
            <a href={randomArticle.url} className=" text-blue-500 underline" >{randomArticle.title}</a>

        </div>
    )
}
export default MoreInfo