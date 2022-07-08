import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

interface FetchImageProps {
  src: string;
  alt: string;
  [otherProps: string]: any;
}

export default function FetchImage({
  src,
  alt,
  ...otherProps
}: FetchImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [localSrc, setLocalSrc] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    fetch(src)
      .then((response) => response.blob())
      .then((imageBlob) => {
        setLocalSrc(URL.createObjectURL(imageBlob));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("[FetchImage] error fetching image: ", error);
        setIsLoading(false);
      });
  }, [src]);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        localSrc && (
          <img
            src={localSrc}
            alt={alt}
            className="max-w-full max-h-full object-contain object-center drop-shadow"
          />
        )
      )}
    </>
  );
}
