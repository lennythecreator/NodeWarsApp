import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const CreateLobby = () => {
    return (
        <div>
           <form>
                <div>
                    <Label htmlFor="lobby-name">Name</Label>
                    <Input id="lobby-name" placeholder="Lobby Name"/>
                </div>
           </form>
        </div>
    );
};