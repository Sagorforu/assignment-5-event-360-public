import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
const UpdateModal = ({ onClose, selectedEventId }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSaveChanges = () => {
    // Add logic here to handle saving changes
    onClose(); // Close the modal after saving changes
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Edit Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              value={name}
              placeholder="Update Recent Event Name"
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 border p-1"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              ImageURL
            </label>
            <input
              id="username"
              value={username}
              placeholder="Image Update Link"
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3  border p-1"
            />
          </div>
        </div>
        <DialogFooter>
          <button type="button" onClick={handleSaveChanges}>
            Save changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;
