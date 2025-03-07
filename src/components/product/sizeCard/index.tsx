type SizeCardProps = {
    size: number;
    available: boolean;
    isSelected: boolean;
    onSelect: (size: number) => void;
}

export default function SizeCard({size,available,isSelected,onSelect}: SizeCardProps){

    let bgColor = ""; 

    if (isSelected) {
        bgColor = "bg-primary"; 
    } else if (available) {
        bgColor = "bg-black-vs"; 
    } else {
        bgColor = "bg-gray-vs"; 
    }

    let cursor = available ? "cursor-pointer" : "cursor-not-allowed";

    return (
        <div
            className={`h-8 w-8 flex items-center justify-center text-white-vs rounded-lg lg:h-10 lg:w-10 lg:text-2xl transition-colors
                 ${bgColor} ${cursor}`}
            aria-disabled={!available}
            onClick={() => available && onSelect(size)}
        >
            {size}
        </div>
    );

}
