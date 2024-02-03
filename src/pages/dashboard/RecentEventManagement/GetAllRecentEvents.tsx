import { getRecentEvents } from "@/api/recentEvents/recentEvents.api";
import Container from "@/components/ui/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Trash2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const GetAllRecentEvents = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery<
    {
      _id: string;
      imageURL: string;
      name: string;
    }[]
  >({
    queryKey: ["recentEvents"],
    queryFn: getRecentEvents,
  });

  if (isError) {
    return (
      <div className="text-center text-2xl text-red-500 mt-10">
        Recent Events data not fetched!!!
      </div>
    );
  }

  const { mutateAsync } = useMutation({
    mutationFn: async (eventId) => {
      const res = await fetch(
        `http://localhost:5000/recent-events/${eventId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast("Recent Event Deleted Successfully");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recentEvents"] });
    },
  });
  const handleDelete = async (eventId) => {
    try {
      await mutateAsync(eventId);
    } catch (error) {
      toast.error("Failed to Delete Recent Event.");
    }
  };

  return (
    <Container className="mt-10 lg:mt-20 border rounded">
      {isLoading ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Images</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Update</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((event) => (
              <TableRow key={event._id}>
                <TableCell>
                  <img src={event.imageURL} alt="" />
                </TableCell>
                <TableCell className="font-medium">{event.name}</TableCell>
                <TableCell>
                  <button>
                    <Pencil className="bg-[#3461FF] text-white size-8 rounded-md p-1" />
                  </button>
                </TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(event._id)}>
                    <Trash2 className="bg-red-500 text-white size-8 rounded-md p-1" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <ToastContainer />
    </Container>
  );
};

export default GetAllRecentEvents;
