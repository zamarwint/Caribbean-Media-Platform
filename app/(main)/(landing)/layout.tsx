import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

export default async function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  //   await queryClient.prefetchQuery({
  //     queryKey: ["session"],
  //     queryFn: () => getUserSession(),
  //   });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col w-full h-full min-h-screen min-w-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </div>
    </HydrationBoundary>
  );
}
