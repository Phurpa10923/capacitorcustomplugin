import Foundation

@objc public class Sql: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
