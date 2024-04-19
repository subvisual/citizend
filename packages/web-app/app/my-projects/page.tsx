import MyProjects from '../_ui/my-projects';
import { KycApprovedCheck } from '../_ui/my-projects/kyc-approved-check';

export default function MyProjectsPage() {
  return (
    <main className="mb-56">
      <h2>My Projects</h2>
      <KycApprovedCheck>
        <MyProjects />
      </KycApprovedCheck>
    </main>
  );
}
