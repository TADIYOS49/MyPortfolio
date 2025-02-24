import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error('Failed to fetch');
          })
          .then(response => {
            setProfileFunction(response.data.user);
            setDataFetched(true);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            openSource.showGithubProfile = "false";
            setDataFetched(false);
          });
      };
      getProfileData();
    }
  }, []);

  if (!dataFetched) {
    return <Contact />;
  }

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof !== null
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}