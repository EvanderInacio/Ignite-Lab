import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscriber } from "./pages/Subscribe";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Subscriber />}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/event/lesson/:slug" element={<Event />}/>

    </Routes>
  )
}