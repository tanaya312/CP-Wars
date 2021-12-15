import { useState, useEffect } from "react";
import axios from "axios";
import "./HomeScreen.css";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview, { Battle, Practice, Tournaments } from "../../pages/Overview";
import { CodeChef, GeeksForGeeks, HackerRank, Learn } from "../../pages/Learn";
import Watch from "../../pages/Watch";
import Profile from "../../pages/Profile";
import { Coders, Community, Forum, Teams } from "../../pages/Community";
import Support from "../../pages/Support";
import Play from "../../pages/Play";

const HomeScreen = () => {
  const [error, setError] = useState("");
  const [homeData, setHomeData] = useState("");

  useEffect(() => {
    const fetchHomeDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/home", config);
        setHomeData(data.data);
        console.log("User"+data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchHomeDate();
  }, []);


  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/overview/battle' exact component={Battle} />
        <Route path='/overview/battle/play' exact component={Play} />
        <Route path='/overview/practice' exact component={Practice} />
        <Route path='/overview/tournaments' exact component={Tournaments} />
        <Route path='/learn' exact component={Learn} />
        <Route path='/learn/geeksforgeeks' exact component={GeeksForGeeks} />
        <Route path='/learn/hackerrank' exact component={HackerRank} />
        <Route path='/learn/codechef' exact component={CodeChef} />
        <Route path='/watch' exact component={Watch} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/community' exact component={Community} />
        <Route path='/community/coders' exact component={Coders} />
        <Route path='/community/teams' exact component={Teams} />
        <Route path='/community/forum' exact component={Forum} />
        <Route path='/support' exact component={Support} />
      </Switch>
    </Router>
  );
};

export default HomeScreen;
