import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <Heading>producto no Encontrado</Heading>

      <p>
        Tal vez quieras volver al{" "}
        <Link
          href="/admin/products?page=1"
          className="text-green-400 font-bold">
          Productos
        </Link>
      </p>
    </div>
  );
}

