import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setPlayer } from "@/api/setPlayer";

type QueryKey = readonly [string]
const queryKey: QueryKey = ['player']

// Export as a custom hook, not a direct mutation
export const useSetPlayer = () => {
    const queryClient = useQueryClient(); // Get client inside the hook
    
    return useMutation({
        mutationFn: setPlayer, 
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey });
        }
    });
}