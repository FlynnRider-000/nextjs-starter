import { Button } from "@/components/Button";

type ThemingShowcaseProps = {
	children?: React.ReactNode;
};

function ThemingShowcase({ children }: ThemingShowcaseProps) {
	return (
		<>
			<div className="text-gray-700 bg-white">{children}</div>
			<div className="dark text-gray-300 bg-gray-900">{children}</div>
			<div className="dark text-gray-300 bg-black">{children}</div>
		</>
	);
}

type CanvasProps = {
	children?: React.ReactNode;
};

function Canvas({ children }: CanvasProps) {
	return (
		<div className="p-8 space-y-4">
			<p>Sample text to visualize average contrast to the background</p>
			{children}
		</div>
	);
}

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
			<ThemingShowcase>
				<Canvas>
					<div className="space-x-3">
						<Button size="sm">Neutral</Button>
						<Button intent="danger" size="sm">
							Danger
						</Button>
					</div>

					<div className="space-x-4">
						<Button>Neutral</Button>
						<Button intent="danger">Danger</Button>
					</div>
				</Canvas>
			</ThemingShowcase>
		</div>
	);
}
