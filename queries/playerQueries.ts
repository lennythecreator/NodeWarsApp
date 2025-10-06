import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {getPlayer} from '@/api/getPlayer';
import { setPlayer } from "@/api/setPlayer";
import { queryClient } from "@/app/layout";

type QueryKey = readonly [string]
const queryKey: QueryKey = ['player']
// export const getPlayerQuery = useQuery({queryKey: queryKey, queryFn: getPlayer})

export const setPlayerQuery = useMutation({mutationFn:setPlayer, onSuccess: () => {
    queryClient.invalidateQueries(queryKey);
}})