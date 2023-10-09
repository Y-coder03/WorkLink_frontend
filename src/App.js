
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Plain_layout from './layout/plain_layout';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Home from './pages/home/home';
import Messages from './components/messaging/messages';
import Search_people from './pages/search_people/search_people';
// import Profile from './components/profile/profile';
// import New_post from './components/add_post/new_post';
import axios from "axios"
import My_posts from './pages/my_posts/my_posts';
import Comments from './pages/comments/comments';
// import Post_new_job from './components/new_job/post_new_job';
import Profile_page from './pages/profile_page/profile_page';
import Add_post from './pages/add_post/add_post';
import Add_job from './pages/add_job/add_job';
import Show_all_jobs from './pages/all_jobs/show_all_jobs';
import Apply_for_job from './pages/apply_for _job/apply_for_job';
import My_applied_jobs from './pages/my_applied_jobs/my_applied_jobs';
import Applications from './pages/applications/applications';
import My_posted_jobs from './pages/my_posted_jobs/my_posted_jobs';
import Other_profile_page from './pages/profile_page/profile_page';
import News_page from './pages/news/news_page';
import Edit_profile_page from './pages/edit_profile/edit_profile_page';


axios.defaults.baseURL = 'http://localhost:10000';

function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
         <Route  path="/" element={<Home/>} />
         <Route  path="/login" element={<Login />} />
         <Route  path="/signup" element={<Signup />} />
         <Route  path="/messages" element={<Messages />} />
         <Route  path={`/search/:word`} element={<Search_people />} />
         <Route  path="/profile" element={<Profile_page/>} />
         <Route  path="/new_post" element={<Add_post/>} />
         <Route  path="/myposts" element={<My_posts/>} />
         <Route  path="/comments/:post_id" element={<Comments/>} />
         <Route  path="/post_new_job" element={<Add_job/>} />
         <Route  path="/all_jobs" element={<Show_all_jobs/>} />
         <Route  path="/apply_for_job/:job_id" element={<Apply_for_job/>} />
         <Route  path="/my_applied_jobs" element={<My_applied_jobs/>} />
         <Route  path="/applications/:job_id" element={<Applications/>} />
         <Route  path="/my_posted_jobs" element={<My_posted_jobs/>} />
         <Route  path="/other_profile_page/:user_id" element={<Other_profile_page/>} />
         <Route  path="/news" element={<News_page/>} />
         <Route  path="/edit_profile" element={<Edit_profile_page/>} />
         
       </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
