import { SkeletonCard } from '../../../ui/skeleton-card';
import { fetchSheetData } from '../../service/sheetService';

export default async function Page(props: {
  params: Promise<{ dataSheetSlug: string }>;
}) {
  const params = await props.params;
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        All 
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}