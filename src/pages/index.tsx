import NewsFeed from "@/components/Utility/NewsFeed";
import NewsAdsBanners from "@/components/Home/NewsAdsBanners";
import TopStoriesArea from "@/components/Home/TopStoriesArea";
import VideoArea from "@/components/Home/VideoArea";
import MoreNews from "@/components/Home/MoreNews";
import LatestedBottomNews from "@/components/Home/LatestedBottomNews";
import PageBase from "@/components/Layout/PageBase";

export default function Home() {
  return (
    <>
      <PageBase title="News" description="news">
        <NewsFeed />
        <NewsAdsBanners />
        <TopStoriesArea />
        <VideoArea />
        <MoreNews />
        <LatestedBottomNews />
      </PageBase>
    </>
  );
}
