import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CeateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Seidebar } from "./components/Sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Seidebar />
      <div className='p-4 ml-76 min-h-screen bg-gray-100 border-2'>
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <div className="flex justify-end gap-4">
          <Button
            startIcon={<ShareIcon size={"md"} />}
            variant="primary"
            size="sm"
            onClick={() => {}}
            text={"Share Brain"}
          />
          <Button
            startIcon={<PlusIcon size={"md"} />}
            variant="secondary"
            size="md"
            text={"Add Content"}
            onClick={() => setModalOpen(true)}
          />
        </div>

        <div className="flex gap-4">
          <Card
            type="twitter"
            link="https://x.com/kirat_tw/status/2072804255224979770"
            title="first tweet"
          />
          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=MIlDK1qQLaI"
            title="harkirat yt"
          />
          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=Gdqkp-2V8KY"
            title="PiyushGarg yt"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
