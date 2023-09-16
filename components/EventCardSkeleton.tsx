import { Skeleton } from "./ui/skeleton";

const EventCardSkeleton = () => {


    return (
        <div>
            <Skeleton className="h-72 w-full rounded-sm" />
            <div className="p-5 space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
}

export default EventCardSkeleton;