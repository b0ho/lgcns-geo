import MethodBadge from '../MethodBadge';

export default function MethodBadgeExample() {
  return (
    <div className="flex gap-4">
      <MethodBadge method="GET" />
      <MethodBadge method="POST" />
      <MethodBadge method="PUT" />
      <MethodBadge method="DELETE" />
    </div>
  );
}
