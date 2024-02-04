import Container from "@/components/ui/Container";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type TRecentEventData = {
  name: string;
  imageURL: string;
};

const CreateRecentEvent = () => {
  const [recentEventName, setRecentEventName] = useState("");
  const [recentEventImageLink, setRecentEventImageLink] = useState("");

  const queryClient = useQueryClient();
  const { mutateAsync, isError, isPending, reset } = useMutation({
    mutationFn: async (recentEventData: TRecentEventData) => {
      const res = await fetch(
        "https://event360-assignment-5.vercel.app/add-recent-event",
        {
          method: "POST",
          body: JSON.stringify(recentEventData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        toast("Recent Event Added Successfully");
        reset();
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recentEvents"] });
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recentEventData = {
      name: recentEventName,
      imageURL: recentEventImageLink,
    };
    const response = await mutateAsync(recentEventData);
    if (response?.message) {
      toast.error(response.message);
    } else {
      reset();
    }
  };

  return (
    <Container className="mt-10 lg:mt-20 border rounded">
      <form onSubmit={handleSubmit} className="space-y-5 p-10">
        <label className="font-medium text-lg">Add Recent Events</label> <br />
        <input
          onChange={(e) => setRecentEventName(e.target.value)}
          type="text"
          required
          className="border p-2 lg:w-1/2"
          placeholder="Event Name"
        />{" "}
        <br />
        <input
          onChange={(e) => setRecentEventImageLink(e.target.value)}
          type="text"
          required
          className="border p-2 lg:w-1/2"
          placeholder="Event Image Link"
        />{" "}
        <br />
        {isError && (
          <div className=" text-red-600 text-2xl">
            Recent Events not Added!!!
          </div>
        )}
        {isPending ? (
          <button className="bg-[#3461FF] py-3 px-10 tracking-wider font-plus-jakarta-sans text-base font-bold text-white">
            ...
          </button>
        ) : (
          <button
            className="bg-[#3461FF] py-3 px-10 tracking-wider font-plus-jakarta-sans text-base font-bold text-white"
            type="submit"
          >
            Add Recent Event
          </button>
        )}
        <ToastContainer />
      </form>
    </Container>
  );
};

export default CreateRecentEvent;
