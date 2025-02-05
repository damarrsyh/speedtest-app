      {/* <div>
        <table>
          <thead>
            <tr>
              <th>Data & Time</th>
              <th>Ping Jitter</th>
              <th>Ping Latency</th>
              <th>Download Bandwidth</th>
              <th>Download Bytes</th>
              <th>Upload Bandwidth</th>
              <th>Upload Bytes</th>
              <th>ISP</th>
              <th>Server</th>
              <th>Interface (IP)</th>
              <th>Interface (IP)</th>
              <th>PacketLoss</th>
              <th>Result URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{formatDateTime(item.datetime)}</td>
                <td>{item.data.ping.jitter} ms</td>
                <td>{item.data.ping.latency} ms</td>
                <td>{item.data.download.bandwidth} Mbps</td>
                <td>{item.data.download.bytes} Bytes</td>
                <td>{item.data.upload.bandwidth} Mbps</td>
                <td>{item.data.upload.bytes} Bytes</td>
                <td>{item.data.isp}</td>
                <td>{item.data.server.country} ({item.data.server.location})</td>
                <td>{item.data.interface.internalIp}</td>
                <td>{item.data.interface.externalIp}</td>
                <td>{item.data.packetLoss}</td>
                <td>
                  <a href={item.data.result.url} target="_blank" rel="noopener noreferrer">
                    View Result
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}