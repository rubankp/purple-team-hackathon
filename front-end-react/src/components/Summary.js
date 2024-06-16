import React, { useContext, useEffect, useState } from "react";
import { extractHTML, fetchSummary } from "../utils";
import DataContext from "../context/dataContext";

function Summary() {
  const { showQuiz } = useContext(DataContext);
  const { youtubeId } = useContext(DataContext);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchSummary(youtubeId)
      .then((data) => setSummary(extractHTML(data.data.summary)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [youtubeId]);

  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "10px",
        display: `${showQuiz ? "none" : "block"}`,
      }}
    >
      {loading ? <div>Loading...</div> : <div dangerouslySetInnerHTML={{ __html: summary }}></div>}
    </div>
  );
}

export default Summary;
