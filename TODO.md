<key>NSExtension</key>
<dict>
    <key>NSExtensionAttributes</key>
    <dict>
        <key>NSExtensionActivationRule</key>
        <dict>
            <key>NSExtensionActivationSupportsWebPageWithMaxCount</key>
            <integer>1</integer>
            <key>NSExtensionActivationSupportsWebURLWithMaxCount</key>
            <integer>1</integer>
        </dict>
    </dict>
</dict>




import Cocoa
import CoreTransferable

class ShareViewController: NSViewController {
    override func loadView() {
        self.view = .init(frame: .zero)
    }
    
    override func viewDidAppear() {
        super.viewDidAppear()
        
        Task {
            let url = await getInputUrl()
            if let url {
                var components = URLComponents()
                components.scheme = "https"
                components.host = "app.raindrop.io"
                components.path = "/add"
                
                components.queryItems = [
                    .init(name: "link", value: url.absoluteString)
                ]
                
                NSWorkspace.shared.open(components.url!)
            }
        }
        
        extensionContext?.completeRequest(returningItems: [])
    }
    
    func getInputUrl() async -> URL? {
        for input in extensionContext!.inputItems {
            guard let input = input as? NSExtensionItem else { continue }
            guard let attachments = input.attachments else { continue }
                                    
            for attachment in attachments {
                let url = try? await attachment.loadTransferable(type: URL.self)
                if let url {
                    return url
                }
            }
        }
        return nil
    }
}

extension NSItemProvider: @unchecked Sendable {
    /// async version of `loadTransferable`
    public func loadTransferable<T: Transferable>(type transferableType: T.Type) async throws -> T {
        try await withCheckedThrowingContinuation { continuation in
            _ = self.loadTransferable(type: transferableType) {
                switch $0 {
                case .success(let result):
                    continuation.resume(returning: result)
                case .failure(let error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }
}
