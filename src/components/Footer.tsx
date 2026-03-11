import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
        reserved.
      </p>
    </footer>
  );
}
