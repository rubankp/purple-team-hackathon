import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/dataContext";

const Start = () => {
  const { startQuiz, showStart, questionLoading, youtubeId, startTime = 0 } = useContext(DataContext);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    if (showStart) {
      setAutoplay(true);
    }
  }, [showStart]);

  return (
    <section className="text-white text-center bg-dark" style={{ flexGrow: 1 }}>
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
            <div className="mt-4">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&autoplay=${autoplay ? 1 : 0}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {!questionLoading ? (
              <button onClick={startQuiz} className="btn px-4 mt-4 py-2 bg-light text-dark fw-bold">
                Start Quiz
              </button>
            ) : (
              <div>Loading</div>
            )}
          </div>
        </div>
    </section>
  );
};

export default Start;
