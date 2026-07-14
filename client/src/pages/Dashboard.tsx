import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CeateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Seidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent()

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

        <div className="flex gap-4 flex-wrap">
  {contents.map(({ type, link, title }) => (
    <Card
      key={link} 
      type={type}
      link={link}
      title={title}
    />
  ))}
</div>
      </div>
    </div>
  );
}

export default Dashboard;
