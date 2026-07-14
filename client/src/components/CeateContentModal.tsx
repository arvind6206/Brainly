import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum contentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<any>();
  const linkRef = useRef<any>();

  const [type, setType] = useState(contentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/user/create/content`,{
      link,
      title,
      type,
      
    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
  }

  return (
    <div>
      {open && (
        <div>
          (
          <div
            className="w-screen h-screen bg-slate-500 fixed top-0 
        left-0 opacity-60 flex justify-center"
          ></div>
          <div
            className="w-screen h-screen fixed top-0
        left-0 flex justify-center"
          >
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 p-4 rounded fixed">
                <div className="flex justify-end ">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div>
                  <Input ref={titleRef} placeholder={"Title"} />
                  <Input ref={linkRef} placeholder={"Link"} />
                </div>
                <div>
                  <h1>Type</h1>
                  <div className="flex justify-center gap-1 pb-2">
                    <Button
                      size="md"
                      text="Youtube"
                      variant={
                        type === contentType.Youtube ? "primary" : "secondary"
                      }
                      onClick={() => {
                        setType(contentType.Youtube);
                      }}
                    ></Button>
                    <Button
                      size="md"
                      text="Twitter"
                      variant={
                        type === contentType.Twitter ? "primary" : "secondary"
                      }
                      onClick={() => {
                        setType(contentType.Twitter);
                      }}
                    ></Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    variant="primary"
                    text="submit"
                    size="md"
                  />
                </div>
              </span>
            </div>
          </div>
          )
        </div>
      )}
    </div>
  );
}
