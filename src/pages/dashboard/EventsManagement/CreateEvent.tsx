import Container from "@/components/ui/Container";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEvent = () => {
  const [eventItemName, setEventItemName] = useState("");
  const [eventItemImageLink, setEventItemImageLink] = useState("");

  const queryClient = useQueryClient();
  const { mutateAsync, isError, isPending, reset } = useMutation({
    mutationFn: async (eventItemData) => {
      const res = await fetch("http://localhost:5000/add-event-item", {
        method: "POST",
        body: JSON.stringify(eventItemData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast("Event Item Added Successfully");
        reset();
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["eventItems"] });
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const eventItemData = {
      eventName: eventItemName,
      photoURL: eventItemImageLink,
    };
    const response = await mutateAsync(eventItemData);
    if (response?.message) {
      toast.error(response.message);
    } else {
      reset();
    }
  };
  return (
    <Container className="mt-10 lg:mt-20 border rounded">
      <form onSubmit={handleSubmit} className="space-y-5 p-10">
        <label className="font-medium text-lg">Add Event Item</label> <br />
        <input
          onChange={(e) => setEventItemName(e.target.value)}
          type="text"
          required
          className="border p-2 lg:w-1/2"
          placeholder="Event Item Name"
        />{" "}
        <br />
        <input
          onChange={(e) => setEventItemImageLink(e.target.value)}
          type="text"
          required
          className="border p-2 lg:w-1/2"
          placeholder="Event Item Image Link"
        />{" "}
        <br />
        {isError && (
          <div className=" text-red-600 text-2xl">Event item not Added!!!</div>
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
            Add Event Item
          </button>
        )}
        <ToastContainer />
      </form>
    </Container>
  );
};

export default CreateEvent;
