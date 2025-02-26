import { useEffect, useState } from "react";

type TopSite = {
  url: string;
  title: string;
};
export default function TopSites() {
  // console.log(window.innerWidth);
  const [topSites, setTopSites] = useState<TopSite[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTopSites = async () => {
      try {
        const sites = await chrome.topSites.get();
        // console.log(sites);
        setTopSites(sites);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching top sites:", err);
        // setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
      }
    };

    fetchTopSites();
    // console.log(topSites);
  }, []);
  // const tempsites = [
  //   {
  //     title: "YouTube",
  //     url: "https://www.youtube.com/?feature=ytca",
  //   },
  //   {
  //     title: "New Tab",
  //     url: "http://localhost:5173/",
  //   },
  //   {
  //     title: "T3 Chat - The Fastest AI Chatbot",
  //     url: "https://t3.chat/",
  //   },
  //   {
  //     title: "HG8245H5",
  //     url: "http://192.168.100.1/",
  //   },
  //   {
  //     title: "Prime Video | Watch movies, TV shows, Live TV, and sports",
  //     url: "https://www.primevideo.com/",
  //   },
  //   {
  //     title: "Login",
  //     url: "https://aris3.udsm.ac.tz/",
  //   },
  //   {
  //     title: "Download Client » Free Linux PC Games",
  //     url: "https://freelinuxpcgames.com/download-client/",
  //   },
  //   {
  //     title: "Home - Netflix",
  //     url: "https://www.netflix.com/",
  //   },
  //   {
  //     title: "The Official Home of YIFY Movies Torrent Download - YTS",
  //     url: "https://yts.mx/",
  //   },
  //   {
  //     title: "GitHub",
  //     url: "https://github.com/",
  //   },
  // ];
  return (
    <div className="rounded-xl border  border-gray-900 p-5 bg-[#191919] m-10">
      <h1 className="text-xl font-bold text-center">Top Sites:</h1>
      {loading ? null : (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center p-5">
          {topSites!.map((item, index) => {
            let title = "";
            if (window.innerWidth <= 1024) {
              if (index <= 7) {
                if (item.title.includes("-")) {
                  if (item.title.indexOf("-") <= item.title.length / 2) {
                    title = item.title.substring(
                      0,
                      item.title.indexOf("-") - 1
                    );
                  } else {
                    title = item.title.substring(item.title.indexOf("-") + 2);
                  }
                } else if (item.title.includes("|")) {
                  // console.log(Number(item.title.indexOf("|")));
                  title = item.title.substring(0, item.title.indexOf("|"));
                } else {
                  title = item.title;
                }
                return (
                  <div
                    title={item.title}
                    className="col-span-1 flex flex-col h-[10dvh] hover:border border-gray-700  rounded-xl w-full p-9  cursor-pointer items-center justify-center"
                    key={index}
                  >
                    <a href={item.url} className="flex flex-col items-center ">
                      {
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${item.url}&sz=256`}
                          alt={`${item.title} logo`}
                          className="rounded-full size-8"
                        />
                      }
                      <h1 className="text-center line-clamp-2">{title}</h1>
                    </a>
                  </div>
                );
              }
            } else {
              if (index <= 8) {
                if (item.title.includes("-")) {
                  if (item.title.indexOf("-") <= item.title.length / 2) {
                    title = item.title.substring(
                      0,
                      item.title.indexOf("-") - 1
                    );
                  } else {
                    title = item.title.substring(item.title.indexOf("-") + 2);
                  }
                } else if (item.title.includes("|")) {
                  // console.log(Number(item.title.indexOf("|")));
                  title = item.title.substring(0, item.title.indexOf("|"));
                } else {
                  title = item.title;
                }
                return (
                  <div
                    title={item.title}
                    className="col-span-1 flex flex-col h-[10dvh] hover:border border-gray-700  rounded-xl w-full p-9  cursor-pointer items-center justify-center"
                    key={index}
                  >
                    <a href={item.url} className="flex flex-col items-center ">
                      {
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${item.url}&sz=256`}
                          alt={`${item.title} logo`}
                          className="rounded-full size-8"
                        />
                      }
                      <h1 className="text-center line-clamp-2">{title}</h1>
                    </a>
                  </div>
                );
              }
            }
          })}
        </div>
      )}
    </div>
  );
}
