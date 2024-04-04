import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <div className="px-10 text-center py-8">
        <p className="text-6xl pb-4" style={{ fontFamily: "charter" }}>
          Find and grow your <br className="hidden md:block" /> audience.
        </p>
        <p>
          With simple tools and features, you can have the chance to connect
          with over 100 million curious readers.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">


        <div className="w-full md:w-1/4 px-5 pt-5 pb-2 border border-black">
          <p className="text-3xl md:text-4xl" style={{ fontFamily: "charter" }}>
            Audience Insights.
          </p>
          <p>
            Use
            <li className="px-1 list-none inline underline">
              <Link to="/datainsights">data</Link>
            </li>
            to learn what resonates with your readers so you can keep growing
            your audience.
          </p>
        </div>

        <div className="w-full md:w-3/4 flex flex-col">
          <div className="flex h-max border border-black border-collapse">
            <div className="flex h-max flex-col justify-around items- w-1/2 p-5 border-r border-black">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "charter" }}
              >
                Social connectivity.
              </p>
              <p>
                Find people you&lsquo;re already connected with on Twitter and
                easily{" "}
                <li className="list-none inline underline px-1">
                  <Link to="/sharepage">share</Link>
                </li>{" "}
                your stories across platforms.
              </p>
            </div>
            <div className="w-1/2 p-5 h-max flex flex-col justify-around">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "charter" }}
              >
                Powerful network.
              </p>
              <p>
                Readers can discover and follow you easily with{" "}
                <li className="list-none inline underline px-1">
                  <Link to="/sharepage">tailored feeds</Link>
                </li>
                and recommendations.
              </p>
            </div>
          </div>

          <div className="flex h-max flex-col md:flex-row border border-black">
            <div className="flex flex-col justify-around w-full md:w-1/3 p-5 border-b border-black md:border-r md:border-black">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "charter" }}
              >
                Email subscriptions.
              </p>
              <p>
                Reach readers by having your stories{" "}
                <li className="list-none inline underline px-1">
                  <Link to="/delivery">delivered</Link>
                </li>{" "}
                straight to their inboxes.
              </p>
            </div>
            <div className="flex flex-col justify-around w-full md:w-1/3 p-5 border-b border-black md:border-r md:border-black">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "charter" }}
              >
                Interactive discussions.
              </p>
              <p>
                Build relationships with your readers through a
                <li className="list-none inline underline px-1">
                  <Link to="/comments">threaded comments</Link>
                </li>
                section.
              </p>
            </div>
            <div className="flex flex-col justify-around w-full md:w-1/3 p-5 border-b border-black md:border-r md:border-black">
              <p
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "charter" }}
              >
                Custom design.
              </p>
              <p>
                Easily{" "}
                <li className="list-none inline underline px-1px">
                  <Link to="/customization">customize</Link>
                </li>{" "}
                your page to stand out and build your brand.
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Features;
