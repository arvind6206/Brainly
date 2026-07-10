import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
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
        onClick={() => {}}
        text={"Add Content"}
      />
      </div>
     

      <div className='flex gap-4'>
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
  );
}

export default App;
